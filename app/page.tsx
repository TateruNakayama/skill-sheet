"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  years: number;
  level: number;
}

const skills = [
  { name: "JavaScript", years: 5, level: 4 },
  { name: "Python", years: 3, level: 3 },
  { name: "Java", years: 2, level: 2 },
  { name: "C++", years: 1, level: 1 },
  { name: "TypeScript", years: 2, level: 3 },
];

const StarRating: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${
            i < level ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{skill.name}</CardTitle>
        <StarRating level={skill.level} />
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">
          経験年数: {skill.years}年
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center space-x-4">
            <Avatar>
              <AvatarImage
                src="/api/placeholder/32/32"
                alt="プロフィール画像"
              />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl font-bold">中山 建</CardTitle>
              <p className="text-lg opacity-90">バックエンドエンジニア</p>
              <a
                href="https://github.com/TateruNakayama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 hover:text-gray-500 transition-colors duration-200"
              >
                <Github className="mr-2" size={20} />
                https://github.com/TateruNakayama
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base pb-4">
              実務経験1年3か月の、あまあまエンジニアです。ですが自己学習は2020年7月からずっと続けています。
            </p>
            <p className="text-base">
              このサイトは、GitHub Pagesで公開しています！ 便利！！ ( Next.js , shadcn/ui )
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.h2
        className="text-3xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Skill
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
