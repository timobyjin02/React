import "../styles/suggestions.css";
import Profile from "./Profile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">회원님을 위한 추천</div>
        <a id="momo">모두 보기</a>
      </div>

      <Profile
        caption="winter님 외 10명이 팔로우합니다"
        urlText="팔로우"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="winter님 외 10명이 팔로우합니다"
        urlText="팔로우"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="winter님 외 10명이 팔로우합니다"
        urlText="팔로우"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="winter님 외 10명이 팔로우합니다"
        urlText="팔로우"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
    </div>
  );
}

export default Suggestions;
