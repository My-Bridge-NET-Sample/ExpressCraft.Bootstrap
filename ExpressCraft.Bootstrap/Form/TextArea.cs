﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class TextArea : BootBaseBox
	{		
		public TextArea(string text = "", int rows = 1) : base(new HTMLTextAreaElement() { ClassName = "form-control" })
		{
			Text = text;
			Content.As<HTMLTextAreaElement>().Rows = Math.Max(rows, 1);			
		}		
	}
}
