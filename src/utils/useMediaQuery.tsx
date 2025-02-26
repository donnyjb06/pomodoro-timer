import React from "react";

const useMediaQuery = (query: string) => {
  const [matchesMedia, setMatchesMedia] = React.useState<boolean>(window.matchMedia(query).matches);

  React.useEffect(() => {
    const mediaMatches = window.matchMedia(query);
    const handleChange = () => setMatchesMedia(mediaMatches.matches)

    mediaMatches.addEventListener("change", handleChange)

    return () => {
      mediaMatches.removeEventListener("change", handleChange)
    }
  }, [query])

  return matchesMedia;
}

export default useMediaQuery;