import useLocalStorageState from 'use-local-storage-state';

export default function useLikes() {
  const [likes, setLikes] = useLocalStorageState<string[]>('likes', {
    defaultValue: [],
  });

  function handleLike(_id: string): void {
    likes.includes(_id)
      ? setLikes((prev) => prev.filter((like) => like !== _id))
      : setLikes((prev) => [...prev, _id]);
  }

  return { likes, handleLike };
}
