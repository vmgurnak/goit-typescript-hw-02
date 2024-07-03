import css from './ErrorMessage.module.css';

const ErrorMessage = (): JSX.Element => {
  return (
    <div>
      <p className={css.errorMessageText}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
};

export default ErrorMessage;
