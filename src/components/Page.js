import { Helmet } from 'react-helmet';

export default function Page({ children, title }) {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title} | Lemox Affiliate</title>
      </Helmet>
      <div>{children}</div>
    </div>
  );
}
