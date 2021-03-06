﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{	
	public class TableBody : BootWidget
	{
		public TableBody(params Union<string, Control, HTMLElement>[] typos) : base(new HTMLTableSectionElement(TableSectionType.Body), typos)
		{

		}

		public TableRow Row(int index)
		{
			return CastElement<TableRow>(Content.Children[index]);
		}

		public IEnumerable<TableRow> Rows
		{
			get
			{
				int length = Content.ChildElementCount;
				for(int i = 0; i < length; i++)
				{
					yield return Row(i);
				}
			}
		}
	}
}
