import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
	return (
		<Layout title="Hello" description="Test React Page">
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "50vh",
					fontSize: "20px",
				}}
			>
				<p>This is an Test Page using react pages.</p>
			</div>
		</Layout>
	);
}
