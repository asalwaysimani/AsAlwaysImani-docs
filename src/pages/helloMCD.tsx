import React from "react";
import Layout from "@theme/Layout";
import Image from '@theme/IdealImage';

export default function Hello() {
	return (
		<Layout title="Hello" description="Margaret Catter Development">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image img={require('/assets/headers/MargaretCatterDev_docusaurus.png')} alt="Niche games"/>
				
			</div>
		</Layout>
	);
}
