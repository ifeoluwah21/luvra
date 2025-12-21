"use server";

import db from "@/db";
import { nfts, NftSchema } from "@/db/schema/nfts";
import { auth } from "@/lib/auth";
import { upload } from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";
import { revalidateTag } from "next/cache";
import * as z from "zod";

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
};

const createSchema = z.object({
  title: z.string().trim().min(1, "Title can not be blank"),
  description: z.string().trim().min(1, "Description can not be blank"),
  price: z.number().gt(0).lte(10000),
  category: z.enum(["art", "gaming", "music", "photography", "membership"], {
    error: () => ({ message: "Please select a valid category" }),
  }),
  nft_file: z
    .file()
    .mime([
      "image/jpeg",
      "image/gif",
      "image/png",
      "image/svg+xml",
      "image/webp",
      "video/mp4",
      "video/ogg",
      "video/webm",
    ])
    .refine((file) => file.size <= 3 * 1024 * 1024, {
      message: "File must be 3MB or less",
    }),
});

export async function createNft(formData: FormData): Promise<ActionResponse> {
  try {
    // Validate the formdata
    const validationResult = createSchema.safeParse({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      nft_file: formData.get("nft_file") as File,
      category: formData.get("category") as string,
    });
    // Return error message if validation fails
    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }
    // Upload image to cloudinary
    const result = (await upload(
      validationResult.data.nft_file,
    )) as UploadApiResponse;
    // Return error message if uploading to cloudinary fails
    if (!result || typeof result.url !== "string" || !result.url) {
      return {
        success: false,
        message: `Failed to upload file to cloudinary.`,
        error: "Cloudinary upload failed or returned unexpected response.",
      };
    }
    // Get user info from session
    const session = await auth();
    // Return error message if user is not authenticated
    if (!session || !session.user) {
      return { success: false, message: "User is not authenticated." };
    }

    // Prepare the data for insertion into db
    const data: NftSchema = {
      title: validationResult.data.title,
      price: validationResult.data.price,
      description: validationResult.data.description,
      category: validationResult.data.category,
      creator: session.user.name,
      url: result.url,
      userId: session.user.id,
    };

    // Insert data into db
    await db.insert(nfts).values(data);
    console.log("✅Successfull added to DB");
    // Redirect or do something
    revalidateTag("nfts", "days");
    return {
      success: true,
      message: "NFT successfully minted",
    };
  } catch (err) {
    console.log("Error creating NFT:", (err as Error).message);
    return {
      success: false,
      message: "An error occurred while creating the NFT",
      error: "Failed to create NFT",
    };
  }
}
