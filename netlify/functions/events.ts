import { Handler } from "@netlify/functions";
import contentful from "contentful";

export const handler: Handler = async (event, context) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_API_KEY
  });
  try {
    const response = await client.getEntries({
      content_type: "mathSocEvents"
    });
    return { statusCode: 200, body: JSON.stringify(response.items) };
  } catch (err) {
    return { statusCode: 404, err };
  }
};
