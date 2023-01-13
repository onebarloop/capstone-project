import { ArtistInterface } from "./ArtistClass";
import useLocalStorageState from "use-local-storage-state";

export type Option = {
  value: string | null;
  label: string | null;
};

export default function useSelect(artists: ArtistInterface[]) {
  const options: Option[] = artists.map((artist) => ({
    value: artist._id,
    label: artist.artistName,
  }));

  const [selectedOption, setSelectedOption] = useLocalStorageState<Option>(
    "mapSelect",
    { defaultValue: { value: null, label: null } }
  );

  return { selectedOption, setSelectedOption, options };
}
