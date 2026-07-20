# Cold Case #069 - Official Solve Write-up

## Challenge Overview

This challenge combines multiple cybersecurity domains:

- Digital Forensics
- OSINT
- Web Exploitation

The intended solution path is described below.

---

## Step 1 - Begin the Investigation

Participants begin with a single file:

```
evidence.jpg
```

Although the repository contains additional supporting files required for the challenge, the intended starting point is only the recovered evidence image.

---

## Step 2 - Inspect the Evidence

The image contains an appended ZIP archive.

For example:

```bash
unzip evidence.jpg
```

This extracts:

```
failuresigma69.jpg
```

---

## Step 3 - Continue the Forensic Analysis

Inspecting the second image the same way:

```bash
unzip failuresigma69.jpg
```

reveals another file:

```
instagram_pfp.jpg
```

---

## Step 4 - Follow the OSINT Lead

The filenames strongly suggest the existence of an Instagram profile.

Searching for:

```
failuresigma69
```

leads to the intended Instagram account.

The account contains:

- A matching profile picture
- A few cryptic posts
- A mysterious bio

This is intentionally designed as a red herring.

Participants are expected to realize that the Instagram profile contains no information required to obtain the flag and return to continue the forensic investigation.

---

## Step 5 - Examine the Metadata

Inspecting the metadata of:

```
instagram_pfp.jpg
```

using a tool such as:

```bash
exiftool instagram_pfp.jpg
```

reveals the hidden clue:

```
Comment : Recovered website backup: ./website
```

This tells the participant that a local website backup exists.

---

## Step 6 - Investigate the Website

Run the website locally:

```bash
cd website
python3 -m http.server 8000
```

Open:

```
http://localhost:8000
```

The homepage does not immediately reveal anything useful.

Viewing the page source exposes a hidden HTML comment directing participants toward:

```
robots.txt
```

---

## Step 7 - Check robots.txt

Opening:

```
/robots.txt
```

reveals:

```
Disallow: /archive
```

This points to another hidden location.

---

## Step 8 - Investigate the Archive

Visiting:

```
/archive
```

displays what appears to be an empty archive.

However, inspecting the page source reveals the hidden flag:

```
addyCTF{g00d_j0b_st4lk1ng_s1gm4}
```

---

## Intended Solve Path

```
evidence.jpg
        │
        ▼
Extract appended ZIP
        │
        ▼
failuresigma69.jpg
        │
        ▼
Extract appended ZIP
        │
        ▼
instagram_pfp.jpg
        │
        ▼
Search for "failuresigma69"
        │
        ▼
Instagram Profile
        │
        ▼
Dead End
        │
        ▼
Return to Investigation
        │
        ▼
Inspect Image Metadata
        │
        ▼
Discover Website Backup
        │
        ▼
Run Website Locally
        │
        ▼
Homepage
        │
        ▼
View Source
        │
        ▼
robots.txt
        │
        ▼
/archive
        │
        ▼
View Source
        │
        ▼
addyCTF{g00d_j0b_st4lk1ng_s1gm4}
```

---

## Skills Tested

- File format analysis
- Archive extraction
- Digital forensics
- Metadata analysis
- Open Source Intelligence (OSINT)
- HTML source inspection
- robots.txt enumeration
- Basic web reconnaissance

---

## Learning Objectives

This challenge encourages participants to:

- Inspect files beyond their visible content.
- Understand that filenames and metadata can contain valuable clues.
- Recognize that OSINT leads are not always the final answer.
- Continue investigating when an apparent lead reaches a dead end.
- Practice basic web enumeration techniques to uncover hidden resources.