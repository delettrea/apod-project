import {Loading} from 'react-daisyui';

type AppLoadingProps = {
  size?: "lg" | "md" | "sm" | "xs" | undefined,
  color?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error" | undefined;
}

const AppLoading = ({color = "primary", size = undefined}: AppLoadingProps) => {
  return (
    <div className="flex justify-center">
      <Loading variant="ring" size={size} color={color}/>
    </div>
  );
};

export default AppLoading;