import { Schema, model, models} from "mongoose";

const IssueSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: [true, 'String is required'],
    },
    tags: {
        type: String,
        required: [true, 'Tag is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    image: {
        type: String,
    }
})

const Issue = models.Issue || model("Issue", IssueSchema);

export default Issue;