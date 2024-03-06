import { MutatingDots } from "react-loader-spinner"

export const Loader = () => {
    return (
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#3470ff"
        secondaryColor="#3470ff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass=""
      />
    );
}