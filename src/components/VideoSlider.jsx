
import ContentVideoCarousel from "./ContentVideoCarousel";
import { healthVideos } from "../data/healthLibraryData";

// Extract YouTube video ID from a full URL or plain ID
const getYouTubeVideoId = (value) => {
  if (!value) return "";

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value;
  }

  try {
    const url = new URL(value);

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }

    if (url.pathname.includes("/shorts/")) {
      return url.pathname.split("/shorts/")[1]?.split("/")[0] || "";
    }

    if (url.pathname.includes("/embed/")) {
      return url.pathname.split("/embed/")[1]?.split("/")[0] || "";
    }

    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
};

export default function VideoSlider() {
  const videoItems = healthVideos.map((video, index) => {
    const videoId = getYouTubeVideoId(video.youtubeId);

    return {
      id: video.id || index + 1,
      title: video.title,
      category: video.category || "Cancer Awareness",
      description: video.description || "",
      thumbnail: videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : "",
      href: videoId
        ? `https://www.youtube.com/watch?v=${videoId}`
        : "",
    };
  });

  return (
    <ContentVideoCarousel
      eyebrow="LEARN & UNDERSTAND"
      title="Education can make every question count."
      subtitle="Watch educational videos about breast awareness, cancer diagnosis, treatment options and patient care."
      items={videoItems}
      slidesPerView={4}
      autoPlay={true}
      interval={4500}
      background="mist"
    />
  );
}





// import SectionTitle from "./SectionTitle";
// import CardSlider from "./CardSlider";
// import { videos } from "../data/siteData";

// export default function VideoSlider() {
//   return (
//     <section className="video-section section-padding bg-gradient-to-br from-navy via-royaldeep to-royal">
//       <div className="page-container">
//         <SectionTitle
//           light
//           eyebrow="LEARN & UNDERSTAND"
//           title="Education can make every question count."
//           description="Watch educational films about breast awareness, clinic visits and treatment conversations."
//         />
//         <CardSlider
//           items={videos}
//           ariaLabel="Educational videos"
//           dark
//           renderItem={(item) => (
//             <article className="overflow-hidden rounded-[1.6rem] border border-white/20 bg-white/10 shadow-premium">
//               <div className="aspect-video overflow-hidden bg-navy">
//                 <iframe
//   title={item.title}
//   src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
//   className="h-full w-full"
//   loading="lazy"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowFullScreen
// />
//               </div>
//               <div className="p-4">
//                 <h3 className="display-font text-lg font-semibold" style={{ color: "#ffffff" }}>
//                   {item.title}
//                 </h3>
//               </div>
//             </article>
//           )}
//         />
//       </div>
//     </section>
//   );
// }
