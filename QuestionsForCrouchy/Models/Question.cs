using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestionsForCrouchy.Models
{
    public class Question
    {
        public int Id { get; set; }
        public DateTime Published { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Details { get; set; }
    }
}
