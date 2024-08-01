import { connectToDB } from "@utils/database";
import Issue from "@models/issue";

export const GET = async (request) => {
    try {
        await connectToDB();
        console.log('Database connected');

        const issues = await Issue.find().populate('creator');

        return new Response(JSON.stringify(issues), {
            status: 200
        });
    } catch (error) {
        console.error('Error fetching issues:', error); // Log any error
        return new Response("Failed to fetch all issues", {
            status: 500
        });
    }
};