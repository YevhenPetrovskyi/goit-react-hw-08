import { DNA } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.loader}>
        <DNA visible={true} height="100" width="100" ariaLabel="dna-loading" />
      </div>
    </div>
  );
};

export default Loader;
