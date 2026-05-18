"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="paper-panel rounded-xl p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="姓名 / 称呼" name="name" />
        <Field label="邮箱" name="email" type="email" />
        <label className="grid gap-2 text-sm font-bold">
          项目类型
          <select name="projectType" className="rounded-lg border border-ink/18 bg-white px-4 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-pink">
            <option>角色设计</option>
            <option>载具 / 机械设计</option>
            <option>场景 / 关键视觉</option>
            <option>游戏美术合作</option>
            <option>其他</option>
          </select>
        </label>
        <Field label="预算范围" name="budget" />
        <Field label="时间计划" name="timeline" />
        <label className="grid gap-2 text-sm font-bold md:col-span-2">
          项目说明
          <textarea name="message" rows={6} className="resize-none rounded-lg border border-ink/18 bg-white px-4 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-pink" />
        </label>
      </div>
      <button type="submit" className="sticker-button mt-6 bg-ink px-6 py-3 font-bold text-paper">
        {sent ? "模拟询价已发送" : "发送询价"}
      </button>
      {sent && (
        <p className="mt-4 rounded-lg border border-ink/12 bg-acid px-4 py-3 text-sm font-semibold">
          谢谢。这是静态 demo 表单，目前不会真的发送消息。
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      {label}
      <input name={name} type={type} className="rounded-lg border border-ink/18 bg-white px-4 py-3 text-base font-normal focus:outline-none focus:ring-2 focus:ring-pink" />
    </label>
  );
}
