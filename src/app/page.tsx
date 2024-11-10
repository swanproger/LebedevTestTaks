import {About} from "@cadex/components/about";
import {Contacts} from "@cadex/components/contacts";
import {Preview} from "@cadex/components/preview";
import {Layout} from "./components/layout";

export default function Home() {
	return (
		<Layout>
			<Preview />
			<About />
			<Contacts />
		</Layout>
	);
}
