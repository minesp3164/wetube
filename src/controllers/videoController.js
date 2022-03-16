import res from "express/lib/response";

let videos = [
   {
      title: "First video",
      rating: 5,
      comments: 2,
      createdAt: "2 min ago",
      views: 1,
      id: 1,
   },
   {
      title: "Video #2",
      rating: 5,
      comments: 2,
      createdAt: "4 min ago",
      view: 59,
      id: 2,
   }
];
export const trendingVideos = (req, res) => {
   return res.render("home", { pageTitle: "Home", videos });
}
export const watch = (req, res) => {
   const { id } = req.params;
   const video = videos[id - 1]
   return res.render("watch", { pageTitle: `Watch ${video.title}`, video });
}
export const getEdit = (req, res) => {
   const { id } = req.params;
   const video = videos[id - 1]
   return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
}
export const postEdit = (req, res) => {
   const { id } = req.params;
   const { title } = req.body;
   videos[id -1].title = title;
   return res.redirect(`/videos/${id}`);
};

export const getUpload = (req,res) => {
   return res.render("upload",{pageTitle: "Upload Video"});
}

export const postUpload = (req,res) => {
   const {title} = req.body;
   const newVideo = { 
   title: req.body.title,
   rating: 0,
   comments: 0,
   createdAt: "just now",
   views: 0,
   id: videos.length+1
   };
   videos.push(newVideo); 
   return res.redirect("/");
}
