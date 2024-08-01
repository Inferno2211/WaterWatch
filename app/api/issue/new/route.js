import { connectToDB } from "@utils/database";
import Issue from "@models/issue";

export const POST = async (req) => {
    const { UserId, title, tags, description, location, image} = await req.json();

    try{
        await connectToDB();
        const newIssue = new Issue({
            creator: UserId,
            title,
            tags,
            description,
            location,
            image
        })

        await newIssue.save();

        return new Response(JSON.stringify(newIssue),{
            status: 201})
    } catch (error){
        console.log(error);
        return new Response("Failed to create issue", {
            status: 500})
    }
}