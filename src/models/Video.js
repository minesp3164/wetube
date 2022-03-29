import mongoose from "mongoose";

export const formatGeners = (geners) => geners.split(",")
.map((word) => (word.startsWith('#') ? word : `#${word}`));

const videoSchema = new mongoose.Schema({
    title:{type: String, required: true, trim: true },
    summary: {type: String, required: true, trim: true },
    year : {type: Date, required: true, default: Date.now },
    geners : [{type: String, trim:true }],
    meta: {
        views:{type: Number,default: 0, required: true},
        rating:{type: Number,default: 0, required: true},
    },
});

videoSchema.static('formatGeners',function(geners){
    return geners.split(",")
    .map((word) => (word.startsWith('#') ? word : `#${word}`))
})

const Video = mongoose.model("Video", videoSchema);
export default Video;