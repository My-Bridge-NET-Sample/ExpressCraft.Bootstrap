﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class TableRow : BootstrapDiv
	{
		public TableRow(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableRowElement(), typos)
		{

		}

		public TableRow(BootstrapRowCellTheme theme, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableRowElement() { ClassName = theme.ToString("G") }, typos)
		{

		}
	}
}