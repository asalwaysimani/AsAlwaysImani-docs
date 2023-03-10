/**
 * Creating a sidebar enables you to:
- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	Sidebar: [{ type: "autogenerated", dirName: "." }],

  // Change the main page text "Learn About My Work" in /project/home/asalwaysimani/workspace/src/pages/index.js
  // Sidebar Learn about My Work links to -> /project/home/asalwaysimani/workspace/docs/intro.md

	// But you can create a sidebar manually
	/*
  Sidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
