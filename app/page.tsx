"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  years: number;
  level: number;
}

const skills = [
  { name: 'JavaScript', years: 5, level: 4 },
  { name: 'Python', years: 3, level: 3 },
  { name: 'Java', years: 2, level: 2 },
  { name: 'C++', years: 1, level: 1 },
  { name: 'TypeScript', years: 2, level: 3 },
];

const StarRating: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${i < level ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
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
              <AvatarImage src="/api/placeholder/32/32" alt="プロフィール画像" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>鈴木 太郎</CardTitle>
              <p className="text-sm text-muted-foreground">フルスタックエンジニア</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              5年以上のWeb開発経験を持つエンジニアです。フロントエンドからバックエンドまで幅広い技術を扱えます。
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Skill
      </motion.h2>
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} index={index} />
      ))}
    </div>
  );
}

export default Home;