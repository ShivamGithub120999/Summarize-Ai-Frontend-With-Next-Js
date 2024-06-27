"use server";

import { getAuthToken } from "@/data/services/get-token";
import { mutateData } from "@/data/services/mutate-data";
import { flattenAttributes } from "@/lib/utils";
import { redirect } from "next/navigation";

interface Payload {
  data: {
    title?: string;
    videoId: string;
    summary: string;
  };
}

export async function createSummaryAction(payload: Payload) {
  const authToken = await getAuthToken();
  if (!authToken) throw new Error("No auth token found");
    console.log("payload+++++++++++++++++++++++++++++",payload);
  const data = await mutateData("POST", "/api/summaries", payload);
  console.log("data",data);

  const flattenedData = flattenAttributes(data);
  console.log("flattenedData",flattenedData)
  redirect("/dashboard/summaries/" + flattenedData.id);
}