using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace QuestionsForCrouchy.Context
{
    public class CrouchyQnAContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public CrouchyQnAContext(DbContextOptions<CrouchyQnAContext> options)
        : base(options)
        { }
        public DbSet<QuestionsForCrouchy.Models.Question> Questions { get; set; }
    }
}
