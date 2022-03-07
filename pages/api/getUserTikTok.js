const cheerio = require("cheerio");

export default async (req, res) => {
  const username = req.body.username;

  const urlCounter = `https://mixerno.space/embed-count/tiktok-user-counter/${username}`;
  const responseCounter = await fetch(urlCounter);
  const htmlTextCounter = await responseCounter.text();
  const htmlCounter = cheerio.load(htmlTextCounter);
  const followersString = htmlCounter("#followers").text();

  const urlAvatar = `https://mixerno.space/embed-pfp/tiktok-user-counter/${username}`;
  const responseAvatar = await fetch(urlAvatar);
  const htmlTextAvatar = await responseAvatar.text();
  const htmlAvatar = cheerio.load(htmlTextAvatar);
  const urlAvatarString = htmlAvatar("img")[0].attribs.src;

  res.statusCode = 200;

  return res.json({
    username,
    followers: followersString,
    avatar: urlAvatarString,
  });
};
