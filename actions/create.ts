"use server";

import { upload } from "@/lib/cloudinary";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
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
  price: z.number().gt(0),
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
    ]),
});

export async function createNft(formData: FormData): Promise<ActionResponse> {
  console.log(formData);
  try {
    const validationResult = createSchema.safeParse({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      nft_file: formData.get("nft_file") as File,
    });
    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }
    //Upload image to cloudinary

    const result = (await upload(
      validationResult.data.nft_file,
    )) as UploadApiResponse;

    console.log(result.url);
    //Insert entry to db
    const data = {
      title: validationResult.data.title,
      price: validationResult.data.price,
      description: validationResult.data.description,
      nft_url: result.url,
    };

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
