export const getThumbnailURL = async (url) => {
  // 動画のソースを確認
  // YouTubeでもニコ動でもなかったらダミー画像を返す
  let source;
  if (url.match(/youtu.be/) || url.match(/youtube.com/)) {
    source = "youtube";
  } else if (url.match(/nicovideo.jp/)) {
    source = "niconico";
  }

  // URLがYouTubeのものだったら
  if (source == "youtube") {
    // 短縮URLに対応
    let youtubeID = "";
    youtubeID = String(url).match(/youtu.be/)
      ? (youtubeID = url.substr(17, 11))
      : (youtubeID = url.substr(32, 11));
    if (youtubeID.length > 0) {
      return `https://img.youtube.com/vi/${youtubeID}/0.jpg`;
    }

    // URLがニコ動のものだったら
  } else if (source == "niconico") {
    let niconicoID = "";
    niconicoID = String(url).substr(31, 10);
    let res;
    await fetch(`/api/nico2thumbnail/${niconicoID}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    //   .then((response) => {
    //     res = response.data.Thumbnail;
    //   });
    return res;
  }
};
