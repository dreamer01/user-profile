import {
	boy1,
	boy2,
	boy3,
	boy4,
	girl1,
	girl2,
	girl3,
	girl4
} from "../../../utilities/images";

export const getImages = ({ gender }) => {
	if (gender === "boy") {
		return [
			{
				uri: boy1,
				value: "boy1"
			},
			{
				uri: boy2,
				value: "boy2"
			},
			{
				uri: boy3,
				value: "boy3"
			},
			{
				uri: boy4,
				value: "boy4"
			}
		];
	} else if (gender === "girl") {
		return [
			{
				uri: girl1,
				value: "girl1"
			},
			{
				uri: girl2,
				value: "girl2"
			},
			{
				uri: girl3,
				value: "girl3"
			},
			{
				uri: girl4,
				value: "girl4"
			}
		];
	}
};
