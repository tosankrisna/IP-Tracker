import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="flex justify-center pt-36">
      <div className="w-1/2">
        <DotLottieReact src="/loading.lottie" loop autoplay />
      </div>
    </div>
  );
};

export default Loading;
