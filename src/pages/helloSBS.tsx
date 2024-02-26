import React from "react";
import Layout from "@theme/Layout";
import Image from '@theme/IdealImage';

export default function Hello() {
	return (
		<Layout title="Hello" description="She Be Spittin Though">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image img={require('/assets/headers/SheBeSpittinThough_docusaurus.png')} alt="bringing back personal blogs"/>
				
			</div>
		</Layout>
	);
}
