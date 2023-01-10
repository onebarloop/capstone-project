import useLocalStorageState from "use-local-storage-state";

export type ViewPoint = {
  random: boolean;
  artists: boolean;
  favorites: boolean;
  reload: boolean;
};

type View = "random" | "artists" | "favorites" | "reload";

export default function useView() {
  const [viewPoint, setViewPoint] = useLocalStorageState<ViewPoint>(
    "viewpoint",
    {
      defaultValue: {
        random: true,
        artists: false,
        favorites: false,
        reload: false,
      },
    }
  );

  function handleSwitchView(view: View): void {
    setViewPoint({
      random: false,
      artists: false,
      favorites: false,
      reload: false,
      [view]: true,
    });
  }
  return { viewPoint, handleSwitchView };
}
