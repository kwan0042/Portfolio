import HanderNav from "./HanderNav";
import Layout from "./Layout";

export default function Home() {
  return (
    <div className="content">
      <Layout />
      <HanderNav navSel="home" />
      <div className="">
        <p>about me</p>
      </div>
    </div>
  );
}
