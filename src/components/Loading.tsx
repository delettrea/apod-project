import {Button} from 'react-daisyui';

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Button {...{loading: true}}>loading</Button>
    </div>
  );
};

export default Loading;