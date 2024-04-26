import { getCampaignHelper } from "@/helper/campaign";
import { getCampaignListHelper } from "@/helper/donor";
import CampaignView from "@/pages/CampaignView";
import React from "react";

export async function generateMetadata({ params }, parent) {
  // read route params
  const id = params.id;
  // fetch data
  const campaign = await getCampaignHelper(id);
  const ogImage = campaign?.gallery?.length && campaign?.gallery[0].preview;

  return {
    description: campaign?.title,
    openGraph: {
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default async function page({ params }) {
  const campaignData = await getCampaignHelper(params.id);
  const donorData = await getCampaignListHelper(params.id);

  return <CampaignView campaign={campaignData} donorList={donorData} />;
}
