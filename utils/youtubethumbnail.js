export function getYouTubeThumbnail(videoUrl) {
  const videoId = videoUrl.match(/v=([^&]+)/)?.[1] || videoUrl.match(/youtu\.be\/([^&]+)/)?.[1];

  if (!videoId || !videoId.match(/^[a-zA-Z0-9-_]{11}$/)) {
    console.error('Invalid YouTube video ID. Please provide a valid URL.');
    return;
  }

  const thumbnailUrls = [
    `https://img.youtube.com/vi/${videoId}/0.jpg`,
    `https://img.youtube.com/vi/${videoId}/1.jpg`,
    `https://img.youtube.com/vi/${videoId}/2.jpg`,
    `https://img.youtube.com/vi/${videoId}/3.jpg`,
    `http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  ];
  const chosenUrl = thumbnailUrls[4];
  return chosenUrl;
}
