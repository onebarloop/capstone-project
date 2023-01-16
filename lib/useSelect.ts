import { ArtistInterface } from "./ArtistClass";
import useLocalStorageState from "use-local-storage-state";

export type Option = {
  value: string | null;
  label: string | null;
};

export default function useSelect(artists: ArtistInterface[]) {
  const options: Option[] = artists.map(({ _id, artistName }) => ({
    value: _id,
    label: artistName,
  }));

  const [selectedOption, setSelectedOption] = useLocalStorageState<Option>(
    "mapSelect",
    { defaultValue: { value: null, label: null } }
  );

  return { selectedOption, setSelectedOption, options };
}
