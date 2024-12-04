import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Error = () => {
  return (
    <div className="flex justify-center pt-36">
      <div className="w-1/2">
        <DotLottieReact src="/error.lottie" loop autoplay />
      </div>
    </div>
  );
};

export default Error;
