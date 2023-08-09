import Logo, { Mode } from './ui/logo';
import ProgressBar from './ui/progress-bar';

type LoadingPageProps = {
  message?: string;
  progress?: number;
  mode?: Mode
};
function LoadingPage({ message, progress, mode }: LoadingPageProps) {
  return (
    <div className="w-screen max-w-md">
      <Logo className="mx-auto mb-8 rounded-md " mode={mode} />
      <ProgressBar progress={progress} />
      <p className="text-slate-500 text-sm text-center">{message}...</p>
    </div>
  );
}

export default LoadingPage;
