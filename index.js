import SqlPlugin, * as pps from "prettier-plugin-sql";

const SQLCFormat = {
	...SqlPlugin,
	printers: {
		sql: {
			print(path, opts) {
				const source = SqlPlugin.printers.sql.print(path, opts);
				return source.replaceAll(/(sqlc\.\w+)\s\(/g, "$1(");
			},
		},
	},
};

export default SQLCFormat;
