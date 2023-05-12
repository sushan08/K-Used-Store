import { IconButton, Tooltip } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useUIContext } from "../../context/ui";
import { useEffect, useState } from "react";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function LikeButton({ id }) {
  const { setSnackbarMessage } = useUIContext();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    async function checkLiked() {
      const docRef = doc(db, "likes", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLiked(true);
      }
    }
    checkLiked();
  }, [id]);

  const handleLike = async () => {
    try {
      if (liked) {
        await updateDoc(doc(db, "likes", id), {
          liked: false,
        });
        setLiked(false);
        setSnackbarMessage("Removed from favorites!");
      } else {
        await updateDoc(doc(db, "likes", id), {
          liked: true,
        });
        setLiked(true);
        setSnackbarMessage("Added to favorites!");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
      setSnackbarMessage("Error updating favorites!");
    }
  };

  return (
    <Tooltip title={liked ? "Remove from favorites" : "Add to favorites"}>
      <IconButton onClick={handleLike}>
        {liked ? <Favorite color="secondary" /> : <FavoriteBorder />}
      </IconButton>
    </Tooltip>
  );
}
