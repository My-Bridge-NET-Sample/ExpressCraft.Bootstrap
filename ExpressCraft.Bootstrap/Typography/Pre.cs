﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;


namespace ExpressCraft.Bootstrap
{
	public class Pre : BootWidget
	{
		public Pre(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("pre"), typos)
		{

		}
	}
}
