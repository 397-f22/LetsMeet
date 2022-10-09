export const slot2time = (slot) => {
  const t = (slot % 48) * 30;
  const m = t % 60;
  const h = Math.floor(t / 60);
  return `${h < 10 ? '0' + h.toString() : h}:${m == 0 ? '00' : m}`;
};

export const slot2dayIdx = (slot) => Math.floor(slot / 48);
