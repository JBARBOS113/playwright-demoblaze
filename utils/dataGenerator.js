// ================== utils/dataGenerator.js ==================
export function generateUser() {
  const rand = Math.floor(Math.random() * 10000);
  return {
    username: `user${rand}`,
    password: `pass${rand}`
  };
}