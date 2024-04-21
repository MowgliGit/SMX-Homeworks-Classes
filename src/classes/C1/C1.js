/*
Topic:

Making components, 
how components work, 
when do we use them, 
component composition

*/

import Logo from "../../components/Logo";
import Settings from "../../components/Settings";
import GSHeader from "../../components/GSHeader";
import FewCards from "../../components/FewCards";

function Kukja() {
  return (
    <>
      {/* <Soba>
          <Kujna />
          <Frizider>
            <Mleko></Mleko>
          </Frizider>
          <Masa></Masa>
          <Stolce></Stolce>
          <Stolce></Stolce>
        </Soba>
        <Soba>
          <Krevet>
            <David />
          </Krevet>
          <Krevet>
            <Mario />
          </Krevet>
        </Soba> */}
    </>
  );
}

function Header() {
  return (
    <div id="header">
      <Logo></Logo>
      <Settings></Settings>
    </div>
  );
}

function Footer() {
  return <footer></footer>;
}

function Sidebar() {
  return <nav></nav>;
}

function Main() {
  return (
    <main>
      <section></section>
    </main>
  );
}
export default function C1(props) {
  return (
    <>
      <GSHeader />
      <FewCards />
      <Header></Header>
      <div>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <Footer></Footer>
    </>
  );
}
