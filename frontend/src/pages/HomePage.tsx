import { Typography } from 'antd';
import IconTick from '../assets/icons/tick.svg';

const HomePage = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='flex justify-center py-3 w-[420px] border-[1.2px] border-primary rounded-md'>
        <img className="w-5 h-5 mr-2" src={IconTick} /> <Typography>Welcome Elsa, you have logged
        in successfully</Typography>
      </div>
    </div>
  );
};

export default HomePage;
