import React from "react";
import Layout from "@theme/Layout";
import Image from '@theme/IdealImage';

export default function Hello() {
	return (
		<Layout title="Hello" description="Ionie Annette">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image img={require('/assets/headers/IonieAnnette_docusaurus.png')} alt="Ionie Annette, original prose projects in various narrative forms"/>
				
			</div>
		</Layout>
	);
}
